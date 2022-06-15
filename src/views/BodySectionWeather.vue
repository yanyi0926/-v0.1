<template>
  <div class="container">
    <div class="weather-side">
      <div class="weather-gradient"></div>
      <div class="date-container">
        <h2 class="date-dayname">{{ WeatherForecast[0] }}</h2>
        <span class="date-day">{{ getNewDate }}</span
        ><i class="location-icon" data-feather="map-pin"></i
        ><span class="location">{{ Weather.city }}</span>
      </div>
      <div class="weather-container">
        <i class="weather-icon" data-feather="sun"></i>
        <h1 class="weather-temp">{{ Weather.forecast[0].high }}</h1>
        <h3 class="weather-desc">{{ Weather.forecast[0].type }}</h3>
      </div>
    </div>
    <div class="info-side">
      <div class="today-info-container">
        <div class="today-info">
          <div class="precipitation">
            <span class="title">风向</span
            ><span class="value">{{ Weather.forecast[0].fengxiang }}</span>
            <div class="clear"></div>
          </div>
          <div class="humidity">
            <span class="title">风力</span
            ><span class="value">{{ FilterFengli }}</span>
            <div class="clear"></div>
          </div>
          <div class="wind">
            <span class="title">低温</span
            ><span class="value">{{ Weather.forecast[0].low }}</span>
            <div class="clear"></div>
          </div>
        </div>
      </div>
      <div class="week-container">
        <ul class="week-list">
          <li class="active">
            <i class="day-icon" data-feather="sun"></i
            ><span class="day-name">{{ WeatherForecast[1] }}</span
            ><span class="day-temp">{{ WeatherForecastHigh[1]}}</span>
          </li>
          <li>
            <i class="day-icon" data-feather="cloud"></i
            ><span class="day-name">{{ WeatherForecast[2] }}</span
            ><span class="day-temp">{{ WeatherForecastHigh[2] }}</span>
          </li>
          <li>
            <i class="day-icon" data-feather="cloud-snow"></i
            ><span class="day-name">{{ WeatherForecast[3] }}</span
            ><span class="day-temp">{{ WeatherForecastHigh[3] }}</span>
          </li>
          <li>
            <i class="day-icon" data-feather="cloud-rain"></i
            ><span class="day-name">{{ WeatherForecast[4] }}</span
            ><span class="day-temp">{{ WeatherForecastHigh[4] }}</span>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BodySectionWeather",
  data() {
    return {
      Weather: {
        forecast: [
          {
            date: "11日星期三",
            high: "高温 26℃",
            fengli: "<![CDATA[2级]]>",
            low: "低温 13℃",
            fengxiang: "西南风",
            type: "多云",
          },
          {high: "高温 26℃",},
          {high: "高温 26℃",},
          {high: "高温 26℃",},
          {high: "高温 26℃",}
        ],
      },
      WeatherForecast: [],
      WeatherForecastHigh: [],
    };
  },
  computed: {
    FilterFengli() {
      return this.Weather.forecast[0].fengli.slice(9, 11);
    },
    getNewDate() {
      const date = new Date();
      const year = date.getFullYear();
      const mouse = date.getMonth() + 1;
      const day = date.getDate();
      const YearDay = `${year}年${mouse}月${day}日`;
      return YearDay;
    },
  },
  created() {
    const that = this;
    axios
      .get("http://wthrcdn.etouch.cn/weather_mini?city=武汉市")
      .then(function (response) {
        that.Weather = response.data.data;
        for (let i = 0; i < that.Weather.forecast.length; i++) {
          that.WeatherForecast.push(that.Weather.forecast[i].date.slice(3, 6));
          that.WeatherForecastHigh.push(that.Weather.forecast[i].high);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped>
:root {
  --gradient: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
}
.clear {
  clear: both;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  border-radius: 25px;
  box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
  background-color: #222831;
  color: #ffffff;
  height: 400px;
  width: 600px;
  position: relative;
  margin: 40px 0 0 0;
}
.weather-side {
  position: relative;
  height: 100%;
  border-radius: 25px;
  width: 300px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  transition: transform 300ms ease, -webkit-transform 300ms ease;
  transform: translateZ(0) scale(1.02) perspective(1000px);
}
.weather-side:hover {
  transform: scale(1.1) perspective(1500px) rotateY(10deg);
}
.weather-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: var(--gradient);
  border-radius: 25px;
  opacity: 0.8;
}
.date-container {
  position: absolute;
  top: 25px;
  left: 25px;
}
.date-dayname {
  margin: 0;
}
.date-day {
  display: block;
}
.location {
  display: inline-block;
  margin-top: 10px;
}
.location-icon {
  display: inline-block;
  height: 0.8em;
  width: auto;
  margin-right: 5px;
}
.weather-container {
  position: absolute;
  bottom: 25px;
  left: 25px;
}
.weather-icon.feather {
  height: 60px;
  width: auto;
}
.weather-temp {
  margin: 0;
  font-weight: 700;
  font-size: 4em;
}
.weather-desc {
  margin: 0;
}
.info-side {
  position: relative;
  height: 100%;
  padding-top: 68px;
  position: absolute;
  left: 195px;
  top: 0px;
}
.today-info {
  padding: 15px;
  margin: 0 25px 25px 25px; /* 	box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25); */
  border-radius: 10px;
}
.today-info > div:not(:last-child) {
  margin: 0 0 10px 0;
}
.today-info > div .title {
  float: left;
  font-weight: 700;
}
.today-info > div .value {
  float: right;
}
.week-list {
  list-style-type: none;
  padding: 0;
  margin: 10px 35px;
  display: flex;
  box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.week-list > li {
  width: 90px;
  padding: 15px;
  cursor: pointer;
  -webkit-transition: 200ms ease;
  -o-transition: 200ms ease;
  transition: 200ms ease;
  border-radius: 10px;
}
.week-list > li:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  background: #fff;
  color: #222831;
  box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
}
.week-list > li.active {
  background: #fff;
  color: #222831;
  border-radius: 10px;
}
.week-list > li .day-name {
  display: block;
  margin: 10px 0 0 0;
  text-align: center;
}
.week-list > li .day-icon {
  display: block;
  height: 60px;
  width: auto;
  margin: 0 auto;
}
.week-list > li .day-temp {
  display: block;
  text-align: center;
  margin: 10px 0 0 0;
  font-weight: 700;
}
</style>