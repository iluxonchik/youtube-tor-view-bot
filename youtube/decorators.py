"""Module containing decorators"""

import settings
from functools import wraps
from youtube.utils import wait_until_page_is_ready
from selenium.common.exceptions import TimeoutException

from youtube.utils import is_page_ready

def page_ready(logger=None):
    """Waits until page is ready"""
    def page_ready_decorator(func):
        @wraps(func)
        def func_wrapper(self, *args, **kwargs):
            driver = self._driver
            try:
                wait_until_page_is_ready(driver)
            except TimeoutException as e:
                if logger:
                    logger.warn('Waited {} for page "{}"" to be ready, but '
                                'failed. Maybe your internet connection is '
                                'slow? Try increasing WAIT_INTERVAL value in '
                                'settings if '
                                'the problem presists.'.format(
                                                        settings.WAIT_INTERVAL,
                                                        driver.current_url))
                raise e
            else:
                return func(self, *args, **kwargs)
        return func_wrapper
    return page_ready_decorator
