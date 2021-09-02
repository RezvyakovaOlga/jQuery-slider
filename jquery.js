const defaultColor = "#AAA";

function getColor (colorValue) {
    let color = "";
    if (colorValue < 50) {
            red = 255;
            green = +(((colorValue * 2) * 255) / 100);
    }
    else {
            red = +(((100 - colorValue) * 2) * 255 / 100);
            green = 255;
        }
    color = `rgb(${red}, ${green}, 0)`;
    return color;
}

function changeBackgroundColor(color) {
  $( ".textBlock" ).css( "background-color", color );
}

function changeTextColor(color) {
    $( ".textBlock" ).css( "color", color );
}

function changeSliderColor(color) {
    $( "#slider .ui-slider-range" ).css( "background-color", color );
}

function changeColor() {
    const slider = $( "#slider" ).slider( "value" ),
    myColor = getColor( slider );
    
    if ($( "#color").hasClass("active")) {
        changeTextColor(myColor);
        changeBackgroundColor(defaultColor);
        changeSliderColor(myColor);
    } else {
        changeBackgroundColor(myColor);
        changeTextColor(defaultColor);
        changeSliderColor(myColor);
    }
}

$(function() {
    $( "#slider" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 100,
        value: 0,
        slide: changeColor,
        change: changeColor
    });

    $("#color").click(function() {
        $("#color").addClass("active")
        $("#background").removeClass("active")
        changeColor()
    })

    $( "#background" ).click(function() {
        $("#background").addClass("active")
        $("#color").removeClass("active")
        changeColor()
    })
});