"""Page selector helpers."""


class Selector(object):
    """
    Encapsulates selectors.

    This class is useful to encapsulate changes to selectors, in case the
    html of the page changes.
    """

    @staticmethod
    def get_xpath_video_selector(video_id):
        """Return xpath video selector from search page."""
        return "//h3[@class='yt-lockup-title ']/a[contains(@href, '{}')]".format(video_id)

    @staticmethod
    def get_xpath_search_bar_selector():
        return "//input[@id='masthead-search-term']"

    @staticmethod
    def get_xpath_next_page():
        return "//span[@class='yt-uix-button-content' and contains(text(), 'Next')]"
