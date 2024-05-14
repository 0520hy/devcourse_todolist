import React from "react";

interface Myprops{
    weather : string;
}

const Weather : React.FC<Myprops> = (props) => {
    return(
        <div>오늘의 날씨는 {props.weather}</div>
    )
}
export default Weather;