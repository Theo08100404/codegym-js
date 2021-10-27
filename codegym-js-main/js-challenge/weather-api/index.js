const select = document.getElementById("selection");//タブの情報を取得
let targetCityName = "london";

const serch = () => {
    const appId = "4b5774e9f3d2a07b84f0f2f88e486224";
    const requestUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=" + appId + "&lang=ja&units=metric&q=" + targetCityName + ",jp;";
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        //readyState 4: リクエスト終了
        if (this.readyState == 4) {
            let data = this.response;
            // 場所
            document.getElementById('place').innerHTML = data.name;
            // 天気
            document.getElementById('weather').innerHTML = data.weather[0].main;

            // 気温
            document.getElementById('temp').innerHTML = data.main.temp;

        };
    };
    //通信方式とURLを設定
    xmlhttp.open("GET", requestUrl, true);
    // JSONを取得するために必要
    xmlhttp.responseType = 'json';
    //通信を実行する
    xmlhttp.send();
};
serch();//初期のロンドンを表示

//タブで選ばれたものを表示
select.onchange = () => {
    switch (selection.value) {
        case "0":
            targetCityName = "london";
            serch();
            break;

        case "1":
            targetCityName = "tokyo";
            serch();
            break;

        case "2":
            targetCityName = "paris";
            serch();
            break;

        case "3":
            targetCityName = "new york city";
            serch();
            break;

        case "4":
            targetCityName = "jakarta";
            serch();
            break;

    };
};




