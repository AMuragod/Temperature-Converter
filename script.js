const celsisusEl=document.getElementById("celsius");
const FarEl=document.getElementById("fahrenheit");
const KelvinEl=document.getElementById("kelvin");


function computeTemp(event)
{

    const currentvalue=+event.target.value;


    switch (event.target.name) {
        case "celsius":
            KelvinEl.value=(currentvalue+273.32).toFixed(3);
            FarEl.value=(currentvalue*1.8+32).toFixed(3);
            break;
        case "fahrenheit":
            celsisusEl.value=((currentvalue - 32)/1.8).toFixed(3);
            KelvinEl.value=((currentvalue - 32)/1.8 + 273.32).toFixed(3);
            break;
        case "kelvin":
            celsisusEl.value=(currentvalue - 273.32).toFixed(3);
            FarEl.value=((currentvalue - 273.32)*1.8 + 32).toFixed(3);
            break;

    default:
            break;
    }


}