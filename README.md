# comixology-downloader
This is a simple Javascript snippet that can be executed while reading a Comixology comic in the web browser, by triggering a PNG download of the current page and then paging forward.
This is not intended to be used to pirate content, but instead to be able to download a backup copy of comics you have already purchased.  
Please do not ruin good things for everyone else because you may find it difficult to practice self control. 

# How to Use
1. Open Chrome or Edge Dev Tools ctrl+shift+i
1. Go to the Sources tab
1. Click the Snippet section on the left
1. Select New Snippet
1. Copy and paste this script into the main window and save the Snippet as whatever you want
1. Navigate to the beginning of the comixology comic you want to download
1. Open the Dev Tools again ctrl+shift+i
1. Navigate to the Sources tab
1. Right click and select Run on the snippet you previously created
1. A Console should pop up below
1. Type in `downloadPages();` and press Enter
1. Leave the browser open and watch it autodownload the pages in the comic

# Troubleshooting and Workarounds
* If you just opened the comic and haven't attempted to page through the comic, the next button will not be loaded.  
In order for the script to work, the next button will need to be available.  Just click once on the comic in the web browser while viewing it to get the next button to load on the right. 
After that the script will be able to find it.
* Occasionally the comic book may end before 99% depending on how the pages divide up.  
In that case, if you really want to capture the remaining pages just navigate to the final page and call `downloadPages(<page number>);` 
<page number> should be replaced with the actual page number, and the script will download the final page and save it under that number. 
In the futue I will be upgrading this to check progress based on total pages.

# Future Development
* Add separate PDF bundler tool in another repo that could be pointed at a directory of PNGs (comicbook page downloads) and generate a PDF of them
* Building off of the above note, find a way to incorporate that directly into the downloader
* Fix issue of tracking progress based on percentage complete.  Sometimes the final page is at 99% sometimes it's at 100%.  Depending on how the math works out.
