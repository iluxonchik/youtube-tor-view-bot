"""Utility functions."""

import settings
from selenium.common.exceptions import (NoSuchElementException,
                                        TimeoutException)
from selenium.webdriver.support.ui import WebDriverWait

def is_page_ready(driver):
    """Checks whether document.readyState == 'complete'"""
    state = driver.execute_script('return document.readyState')
    return state == 'complete'

def wait_until_page_is_ready(driver):
    try:
        WebDriverWait(driver, settings.WAIT_INTERVAL).until(
                                            is_page_ready)
    except TimeoutException as e:
        raise e
