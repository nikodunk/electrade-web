function pageFunction(context) {
    var $ = context.jQuery;
    var startedAt = Date.now();

    var extractData = function() {
        // timeout after 10 seconds
        if( Date.now() - startedAt > 15000 ) {
            context.finish("Timed out before #my_element was loaded");
            console.log('timed out finish')
            return;
        }

        // if my element still hasn't been loaded, wait a little more
        if( $("div.asset-compositor--image.asset-compositor--image__ms.iso-compositor--image").eq(10) === "https://www.tesla.com/configurator/compositor?context=design_studio_2?&bkba_opt=2&view=STUD_3QTR&size=1400&model=ms&options=RENA,AD02,AF00,AU00,BC0B,BP00,BR00,BS00,BT60,CH00,PBCW,CW00,DA00,DRLH,DV2W,FG01,HP00,IDHM,IX00,LP00,PA00,PF00,PK01,PS01,PX00,QPMT,RFPO,SC01,SP00,SR01,SU00,TM00,TP01,TR00,UTMF,WT19,WTX0,X001,X003,X007,X011,X014,X021,X025,X027,X028,X031,X037,YF00,MDLS&version=" ) {
            setTimeout(extractData, 500);
            console.log('end of page not loaded, waiting...')
            return;
        }

        // refresh page screenshot and HTML for debugging
        context.saveSnapshot();

        var results = [];


        console.log('loop running...')
        $("div.list-container__item").each(function(index, element){
            results.push({
                name: $(this).find(".block__name h2").text(),
                image: $("div.asset-compositor--image.asset-compositor--image__ms.iso-compositor--image").css("background-image").replace("url(","").replace(")", ""),
                price: $(this).find(".block__specs h2").text(),
                miles: $(this).find(".vehicle-spec--mileage").text(),
                location: $(this).find("div.block__elem.iso-text--medium ").text(),
                url: "https://tesla.com/used/"+$(this).attr("class").substring(102, 119)
            })
        })

        console.log('finished!')
        // save a result
        context.finish(results);
    };

    // tell the crawler that pageFunction will finish asynchronously
    context.willFinishLater();

    extractData();
}










function pageFunction(context) {
    var $ = context.jQuery;
    var results = [];
    
    $("div.list-container__item").each(function(index, element){
        results.push({
            name: $(this).find(".block__name h2").text(),
            image: $("div.pointer div.asset.asset__image div.iso-compositor--image").css("background-image").replace("url(","").replace(")", ""),
            price: $(this).find(".block__specs h2").text(),
            miles: $(this).find(".vehicle-spec--mileage").text(),
            location: $(this).find("div.block__elem.iso-text--medium ").text(),
            url: "https://tesla.com/used/"+$(this).attr("class").substring(102, 119)
        })
    })
    return results
}