"""Settings file containing program configuration."""

# path to config file, this one is used if none is provided via the
# command-line interface
CONFIG_PATH = 'cofig.json'

# Selenium-related settings

# explicit wait intervals, tune this according to expected itnernet conenciton
# speed
WAIT_INTERVAL = 10

# Settings prefixed with "TOR" relate to the configuration of the tor instance
# managed by the stem library
TOR_SOCKS_PORT = 1992
TOR_CONFIG = None  # custom config or None (https://stem.torproject.org/api/process.html#stem.process.launch_tor_with_config)


# Humanizer settings
ENABLE_HUMANIZER = True
H_MIN_SCROLLS = 1
H_MAX_SCROLLS = 13
H_MIN_SCROLL_INTERVAL = 0.7
H_MAX_SCROLL_INTERVAL = 3
