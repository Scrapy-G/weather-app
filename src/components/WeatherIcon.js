export default function WeatherIcon({iconName, size=1, style}){

    const icon = `owi owi-${iconName} owi-${size}x `;
    return (
        <i className={icon} style={style}/>
    );
}