
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const context = browser.defaultBrowserContext();

  context.overridePermissions("https://www.trip.com", [
    "geolocation",
    "notifications",
  ]);
  const page = await browser.newPage();
  await page.goto("https://trip.com", { waitUntil: "networkidle2" });
  await page.click(
    "#main-search-box > div.c-srh-holder-deep-blue > div > div.mc-srh-box__tab-con.u-clearfix > ul > li:nth-child(2) > span"
  );
  await page.waitForTimeout(2000);
  await page.click(
    "#searchBoxCon > div > div > form > div > div.m-searchForm__single-wrapper.flex > ul > li.m-searchForm__item.segment-city.flex > div.segment-info-wrapper.flex > div:nth-child(1) > div.fuzzy-input-wrapper > div.fuzzy-input > div > input"
  );
  await page.waitForTimeout(2000);
  await page.type(
    "#searchBoxCon > div > div > form > div > div.m-searchForm__single-wrapper.flex > ul > li.m-searchForm__item.segment-city.flex > div.segment-info-wrapper.flex > div:nth-child(1) > div.fuzzy-input-wrapper > div.fuzzy-input > div > input",
    "mumb"
  );
  await page.waitForTimeout(2000);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);
  await page.click(
    "#searchBoxCon > div > div > form > div > div.m-searchForm__single-wrapper.flex > ul > li.m-searchForm__item.segment-city.flex > div.segment-info-wrapper.flex > div:nth-child(3) > div.fuzzy-input-wrapper > div.fuzzy-input > div > input"
  );
  await page.waitForTimeout(2000);
  await page.type(
    "#searchBoxCon > div > div > form > div > div.m-searchForm__single-wrapper.flex > ul > li.m-searchForm__item.segment-city.flex > div.segment-info-wrapper.flex > div:nth-child(3) > div.fuzzy-input-wrapper > div.fuzzy-input > div > input",
    "delh"
  );
  await page.waitForTimeout(2000);
  await page.keyboard.press("Enter");
  // await page.waitForTimeout(4000);
  await page.click(
    "#searchBoxCon > div > div > form > div > div.m-searchForm__single-wrapper.flex > div > div"
  );
  await page.waitForTimeout(8000);
  const data = await page.evaluate(
    () => {
      var arrays = [];
      for (i=1;i<30;i++) {
        if (document.querySelector("#J_resultList > div:nth-child("+i+") > div > div > div.f-info-content.flex-center")){
          
          arrays.push(document.querySelector("#J_resultList > div:nth-child("+i+") > div > div > div.f-info-content.flex-center").textContent)
        }
      }
      return arrays
    }
      
  ).catch((e) => {
    console.log("this is error"+e);
  })
  console.log(data);

  // for (i=0; i<= x.length; i++) {
  // 	var y = x[i];
  // 	var name = y.getElementsByClassName("flight-info-airline__name ThemeColor8")[0].outerText
  // var time1 = document.querySelector("#J_resultList > div:nth-child(1) > div > div > div.f-info-content.flex-center > div.flight-info-list > div > div.flight-time.flight-info-moment.result-period > div.flight-info-				moment__timer.ThemeColor8 > span:nth-child(1)").textContent
  // var time2 = document.querySelector("#J_resultList > div:nth-child(1) > div > div > div.f-info-content.flex-center > div.flight-info-list > div > div.flight-time.flight-info-moment.result-period > div.flight-info-				moment__timer.ThemeColor8 > span:nth-child(3)").textContent;
  // var date = y.getElementsByClassName("flight-info-moment__date ThemeColor6")[0].outerText;
  // var duration = y.getElementsByClassName("duration ThemeColor8")[0].textContent;
  // var flighttype = y.getElementsByClassName("flight-info-stop__text ThemeColor8")[0].textContent;
  // var triptype = y.getElementsByClassName("item-con-price__tag")[0].textContent;
  // var currency = y.getElementsByClassName("o-price-flight__currency")[0].textContent;
  // var numbers = y.getElementsByClassName("o-price-flight__num")[0].textContent;
  // var total_amount = currency + " , " + numbers;
  // console.log("Flight company name:  "+name);
  // console.log("Timings :"+time1+ " - " +time2 );
  // console.log("Date: "+date);
  // console.log("Duration: "+duration);
  // console.log("stops: "+flighttype);
  // console.log("triptype: "+ triptype);
  // console.log("amount: "_+ total_amount);
  // }
  await page.waitForTimeout(2000);
  await browser.close();
})();
