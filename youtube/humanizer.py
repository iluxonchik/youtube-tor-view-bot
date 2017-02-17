"""Module containing functions for mimicing human behaviour"""

import settings

from time import sleep
from random import uniform, randint


def human_send_keys(element, text, min=0.2, max=0.50,
                    first_delay_min=1.0, first_delay_max=3.0):
    """Simulates human behaviour by sending keys with rand interval"""
    if first_delay_min is not None and first_delay_max is not None:
        sleep(uniform(first_delay_min, first_delay_max))
    for letter in text:
        element.send_keys(letter)
        sleep(uniform(min, max))

def scroll_randmonly_on_page(driver, num_scrolls=1,
                             delay_min=settings.H_MIN_SCROLL_INTERVAL,
                             delay_max=settings.H_MAX_SCROLL_INTERVAL,
                             first_delay_min=settings.H_MIN_SCROLL_INTERVAL,
                             first_delay_max=settings.H_MAX_SCROLL_INTERVAL):
    """Scrolls randomly on page"""
    if first_delay_min is not None and first_delay_max is not None:
        sleep(uniform(first_delay_min, first_delay_max))

    for i in range(1, num_scrolls + 1):
        # get window height: important to have window re-computed every time
        # because some content might be loaded dynamically (ex: AJAX)
        max_y = driver.execute_script('return window.scrollMaxY')

        # choose random location to scroll to (within the height)
        scroll_pos_y = randint(0, max_y + 1)

        # scroll, then delay, then scroll again
        driver.execute_script('window.scrollTo(0, {})'.format(scroll_pos_y))
        sleep(uniform(delay_min, delay_max))
