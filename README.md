# Reddit comments nuker

Delete all your Reddit comments one by one.

## Installation

```bash
git clone https://github.com/paolobettelini/reddit-comments-nuker
cd reddit-comments-nuker
web-ext build
```
Disable addons verification (needs Firefox Nightly and Developer channel).
<br>
Set `xpinstall.signatures.required` to `False` in `about:config`
<br>
Go to `about:addons` and drop the `.zip` file in the tab.

## Usage

Go to https://old.reddit.com/user/username/comments/
and wait a while. Delete the extension afterwards.