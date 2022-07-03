function downloadPages(nextPage) {
    const comicPercentage = document.getElementById('pageInfoPercent');
    if(!comicPercentage) {
        console.error('Unable to track percentage of comic completion');
        return;
    }
    const percentComplete = Number(comicPercentage.innerText);
    if (isNaN(percentComplete)) {
        console.error('Percentage completion is not a number', percentComplete);
        return;
    }
    
    const nextButton = document.getElementById('readerChevronRight');
    if (!nextButton) {
        console.error('Next button is missing.  Unable to page forward');
        return;
    }
    
    let continueDownload = true;
    let page = 1;
    if (nextPage !== undefined) {
        page = nextPage;
    }

    downloadPage(page.toString());
    nextButton.click();

    if (percentComplete !== 100) {
        setTimeout(() => {
            downloadPages(page + 1);
        }, 1000);
    }
}



function downloadPage(pageName) {
    const canvas = document.querySelector('[data-label="stage"]');
    if (!canvas) {
        throw Error('Main canvas is missing.  Nothing to save.');
    }
    
    const anchor = document.createElement('a');
    anchor.download = pageName + ".png";
    anchor.href = canvas.toDataURL("image/png");
    anchor.click();
}


