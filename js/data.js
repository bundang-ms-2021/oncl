let dat = [
    [ "국어",
      "630 453 6254",
      "7287434",
      "https://zoom.us/j/6304536254?pwd=blA0NVRLR0VEaHpBWjliTWNEOFIrdz09"
    ],
    [ "영어",
      "719 537 1141",
      "7287432",
      "https://zoom.us/j/7195371141?pwd=eHBCYm1NcTJLbTZGeTRYUWlxaHpiZz09"
    ],
    [ "수학",
      "859 998 9981",
      "7287430",
      "https://zoom.us/j/8599989981?pwd=WHlrcDFWUk9HZmMyeUJRUW9Kc0Npdz09"
    ],
    [ "사회",
      "234 739 6662",
      "7287413",
      "https://zoom.us/j/2347396662?pwd=dVJOQlBDT2IxY0JVNHpEdHk0b1NHQT09"
    ],
    [ "역사",
      "723 685 2433",
      "7287431",
      "https://us02web.zoom.us/j/7236852433?pwd=alAwQmxLamtrVzhuQXdlR0F0bVR6UT09"
    ],
    [ "과학",
      "431 736 9175",
      "w9qvPm",
      "https://zoom.us/j/4317369175?pwd=bjd2em9DOXBDTWd2N3B4TXZ0VThYQT09"
    ],
    [ "기가",
      "537 572 4539",
      "7287446",
      "https://zoom.us/j/5375724539?pwd=OTUySzVHbzE1Zk9mT3dZUVNiOWlzdz09"
    ],
    [ "음악",
      "597 955 4772",
      "7287420",
      "https://zoom.us/j/5979554772?pwd=OWJ5K2NTTEpHSHAydHZkWmhGTnZwQT09"
    ],
    [ "미술",
      "279 815 6416",
      "0317287411",
      "https://zoom.us/j/2798156416?pwd=RTBETjVSMlNnUDc5OFVOK3g5RFFUZz09"
    ],
    [ "체육",
      "632 832 2476",
      "7287414",
      "https://zoom.us/j/6328322476?pwd=bEZBQ3cvZnVmeCtSVEZIVmtCYzVoZz09"
    ],
    [ "한문",
      "423 623 1455",
      "7287441",
      "https://zoom.us/j/4236231455?pwd=dUplUVZsd1kvUFJldWFCcVFHR2JrZz09"
    ],
    [ "진로와 직업",
      "479 888 9822",
      "7287482",
      "https://us02web.zoom.us/j/4798889822?pwd=bVRDQ3lHYTJOcitneUVFZWtsME9ldz09"
    ],
    [ "스포츠",
      "sp",
      "sp",
      "sp"
    ]
  ]

  let sports = [
    [
      "배드민턴",
      "619 617 6243",
      "12345678",
      "https://us05web.zoom.us/j/6196176243?pwd=Y3NvYVFGUkJ1RXliMUlPQ0t6VVk5Zz09"
    ],
    [
      "요가",
      "632 832 2476",
      "7287414",
      "https://zoom.us/j/6328322476?pwd=bEZBQ3cvZnVmeCtSVEZIVmtCYzVoZz09"
    ],
    [
      "탁구",
      "604 485 8427",
      "7287423",
      "https://us02web.zoom.us/j/6044858427?pwd=UGp0WUZnQ2tlVDhtWjNhU1hPeTk0dz09"
    ],
    [
      "피구",
      "723 685 2433",
      "72874311",
      "https://us02web.zoom.us/j/7236852433?pwd=alAwQmxLamtrVzhuQXdlR0F0bVR6UT09"
    ],
    [
      "풋살",
      "423 623 1455",
      "7287441",
      "https://zoom.us/j/4236231455?pwd=dUplUVZsd1kvUFJldWFCcVFHR2JrZz09"
    ]
  ]

    var GetData = function(subject, data){
      return dat[subject][data]
    }

    var CopyLink = function(data) {
        var t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = data;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        alert("복사되었습니다.");
    };

    var WriteData = function(loop){
      var i;

      var text = "";

      text += `<ul>`;
      for(i = 0; i < loop; i++){
        //document.write();
        text += `<li><h3>` + GetData(i, 0) + `</h3>`;
        if(GetData(i, 1) == "sp"){
          var j;  
          text += `<ul>`;
          for(j = 0; j < sports.length; j++){
            text += `<li><h3>` + sports[j][0] + `</h3>`;
            text += `
            <ul>
              <li>ID  :  ` + sports[j][1] + `   <a href='javascript:void(0);'    onclick="CopyLink('`+sports[j][1]+`')"> [복사]</a></li>
              <li>PW  :  ` + sports[j][2] + `   <a href='javascript:void(0);'    onclick="CopyLink('`+sports[j][2]+`')"> [복사]</a></li>
              <li><a href=` + sports[j][3] + `>바로가기</a></li>
            </ul><br></li>`;
          }
          text += `</ul>`
        }
        else{
          text += `
          <ul>
            <li>ID  :  ` + GetData(i, 1) + `   <a href='javascript:void(0);'    onclick="CopyLink('`+GetData(i, 1)+`')"> [복사]</a></li>
            <li>PW  :  ` + GetData(i, 2) + `   <a href='javascript:void(0);'    onclick="CopyLink('`+GetData(i, 2)+`')"> [복사]</a></li>
            <li><a href=` + GetData(i, 3) + `>바로가기</a></li>
          </ul><br>`;
        }
        text += `</li>`;
      }
      text += `</ul>`;
      var space = document.getElementById("idpw");
      space.innerHTML = text;
    }

    var not_exist = `
      <h3>Not Exist<h3>
      <ul>
        <li>이 사이트의 위치 정보 추적이 수락(혹은 허용) 되어있는지 확인하십시오.</li>
        <li>이 사이트를 경기도 내에서 접속중인지 확인하십시오.</li>
      </ul>
    `;

    function CheckGeology(){
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(CheckPosition);
          } else {
            var space = document.getElementById("idpw");
            space.innerHTML = not_exist;
          }
      }

      function CheckPosition(position) {
          var lat = position.coords.latitude; //위도
          var long = position.coords.longitude; //경도
          if(lat >= 36 && lat <= 38 && long >= 126 && long <= 128) {
            WriteData(dat.length);
          }
          else{
            var space = document.getElementById("idpw");
            space.innerHTML = not_exist;
          }
      } 

      function manage(){
        CheckGeology();
      }

      function init() {
        var space = document.getElementById("idpw");
        space.innerHTML = not_exist;
        manage();
        setInterval(manage, 1000);
      }

  init();