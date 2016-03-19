function FindProxyForURL(url, host)
{
  if (shExpMatch(host, "*.youtube.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.googlevideo.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.google-analytics.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.googleapis.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.google.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.typekit.net")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.techcrunch.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.wordpress.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.wp.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.nytimes.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.twitter.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "twitter.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "flowtype.org")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.facebook.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.fb.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.fbcdn.net")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.bloomberg.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "zh.wikipedia.org")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.wsj.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.cchere.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.ccthere.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "gnuradio.org")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.techdirt.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.documentcloud.org")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.dcpos.ch")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.amazonaws.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "pastebin.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.cnet.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.reuters.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.reutersmedia.net")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.githubusercontent.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "gist.github.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "babeljs.io")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.cloudflare.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "duckduckgo.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.chiphell.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.mobile01.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.tw")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.gravatar.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.aolcdn.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.skimresources.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.taboola.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.truoptik.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.libgen.info")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.libgen.org")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.live.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.akamaihd.net")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.1drv.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.skype.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.janestreet.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.webtype.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.friendfeed-media.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.jacquesmattheij.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.vimeo.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.yam.com")) {
    return "SOCKS5 localhost:1080";
  } else if (shExpMatch(host, "*.discuss.com.hk")) {
    return "SOCKS5 localhost:1080";
  }

  return "DIRECT";
}
