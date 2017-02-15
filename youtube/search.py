"""Module responsible for searching for a video."""

import logging

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import (NoSuchElementException,
                                        TimeoutException)
from selenium.webdriver.support.ui import WebDriverWait

import settings
from youtube.selector_helper import Selector
from youtube.utils import is_page_ready, wait_until_page_is_ready
from youtube.decorators import page_ready
from youtube.exceptions import PageOutOfRangeError

class YouTubeSearch(object):

    def __init__(self, video_id, search_terms=[], max_page=1,
                 youtube_url='https://youtube.com'):
        self._video_id = video_id
        self._search_terms = search_terms
        self._max_page = max_page
        self._youtube_url = youtube_url

        self._curr_search_term_index = 0
        self.MAX_SEARCH_TERM_INDEX = len(self._search_terms)
        self._curr_page_num = 1

        self._driver = self._create_webdriver()

    @property
    def driver(self):
        return self._driver

    @property
    def is_in_page_range(self):
        return self._curr_page_num <= self._max_page

    def close_driver(self):
        if self._driver:
            self._driver.quit()

    def query_youtube(self):
        """
        Query YouTube for the search term.

        Search terms are cycled throught the search term list.
        Returns:
            driver (webdriver): updated webdriver, on the first page of the
            search results.
        """
        if not self._search_terms:
            # if there are no search terms, it means we're going straight to
            # the video url
            logging.warn('query_youtube() called when search_query is empty '
                         'or None')
            return

        # get the search term to use (cycles through the list)
        search_term = self._search_terms[self._curr_search_term_index]
        self._curr_search_term_index = (
            (self._curr_search_term_index + 1) % self.MAX_SEARCH_TERM_INDEX)

        self._driver.get(self._youtube_url)
        search_bar = self._driver.find_element_by_xpath(
                Selector.get_xpath_search_bar_selector())
        search_bar.send_keys(search_term)
        search_bar.send_keys(Keys.RETURN)
        logging.info('Searched YouTube for "{}".'
                     'Now on the first page of '
                     'search results'.format(search_term))
        return self._driver

    @page_ready(logging)
    def find_video_in_page(self):
        """
        Returns:
            None if video not found in page, element to be clicked if video
            was found.
        """
        try:
            elem = self._driver.find_element_by_xpath(
                        Selector.get_xpath_video_selector(self._video_id))
            return elem
        except NoSuchElementException:
            return None

    @page_ready(logging)
    def go_to_next_page(self):
        """
        Advances the webdriver to the next page.

        Returns:
            new_page (int): new page number

        Raises:
            PageOutOfRangeError: max page number exceeded (video not found
            within the range) # TODO: should this be here?
        """
        if not self.is_in_page_range:
            raise PageOutOfRangeError('Current page is: {}'
                                      'Max allowed page is: {}'
                                      .format(self._curr_page_num,
                                              self._max_page))

        elem = self._driver.find_element_by_xpath(
                                    Selector.get_xpath_next_page())
        elem.click()
        self._curr_page_num += 1

    def _build_return_dict(self, video_elem):
        if video_elem is None:
            # video not found
            return None

        search_term = self._search_terms[self._curr_search_term_index]
        res = {
                'page': self._curr_page_num,
                'search_term': search_term,
                'video_element': video_elem,
              }
        return res

    def search(self):
        self.query_youtube()  # go to the first page of search results
        # TODO:
        # * search up to self._max_page for the video
        # * if video found, fill in the dict and return it
        while self.is_in_page_range:
            video_elem = self.find_video_in_page()
            if video_elem is not None:
                # video found, break out of the loop
                break
            self.go_to_next_page()
        return self._build_return_dict(video_elem)

    def _create_webdriver(self):
        return webdriver.Firefox()
