


window.loadSlider = function (json) {
    console.log(json);
    const obj = JSON.parse(json);
    console.log(obj);
    const data = obj.data;
    console.log(data);

    //set const div to a document element ID named slider
    const div = document.getElementById('slider');

    const createSlider = function (question) {
        // console.log(question);
        //const text = question.text;
        const fieldData = question?.fieldData || {};
        const text = fieldData?.Question || 'N/A';
        const minVal = fieldData?.MinValue || 0;
        const maxVal = fieldData?.MaxValue || 100;
        const value = fieldData?.Value;
        const id = fieldData?.PrimaryKey;
        console.log(id);
         //create a document element named input and set it to const slider
    const slider = document.createElement('input');

    //add attributes to slider of range
    // slider.setAttribute('type', 'range');
    // slider.setAttribute('min', '0');
    // slider.setAttribute('max', '100');
    // slider.setAttribute('step', '20');
    slider.type = 'range';
    // set class name of slider to form-range
    slider.className = 'form-range pb-5 pt-1';
    slider.max = maxVal;
    slider.min = minVal;
    slider.value = value;
    // slider.step = '1';
    slider.id = id;
    //slider function to update the DOM
    slider.oninput = function () {
        console.log(this.value);
        //const slider_value = document.getElementById('slider_value');
        const slider_value = document.getElementById(`slider_value_${id}`);
        slider_value.innerHTML = this.value;
    }
    //slider function to pass back to FileMaker
    slider.onchange = function () {
        console.log(this.value);
        //const slider_1_value = document.getElementById('slider_1_value');
        // const slider_value = document.getElementById('slider_value');
        const value = this.value;
        const id = this.id;
        const obj = { id, value };
        FileMaker.PerformScript('UpdateField', JSON.stringify(obj));
    }

    //create a document element named label and set it to const label
    const slider_1_label = document.createElement('label');
    //set the innerHTML of label to 'Slider 1 How old are you?'
    slider_1_label.innerHTML = `${text} <span id="slider_value_${id}" class='bg-primary text-white rounded p-1'>${slider.value}</span>`;



    div.appendChild(slider_1_label);
    div.appendChild(slider);



  
};
data.forEach(function(question){
    createSlider(question);
})

// createSlider(); 


    }

   