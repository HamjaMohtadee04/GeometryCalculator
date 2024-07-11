function CalculateTriangleArea(){
   const TriangleField = document.getElementById("TriangleBase");
   const TriangleFieldString = TriangleField.value;
   const newTriangleBaseFieldvalue = parseFloat(TriangleFieldString);

   const TriangleHightField = document.getElementById("TriangleHeight");
   const TriangleHeightFieldString = TriangleHightField.value;
   const newTriangleHeightFieldvalue= parseFloat(TriangleHeightFieldString);
//    console.log(newTriangleBaseFieldvalue)
//    console.log(newTriangleHeightFieldvalue)

const Area = 0.5*newTriangleBaseFieldvalue*newTriangleHeightFieldvalue;

 const TriangleAreaValue =document.getElementById("TriangleAreaValue");
  TriangleAreaValue.innerText = Area;

  if(isNaN(newTriangleHeightFieldvalue) || isNaN(newTriangleBaseFieldvalue)){
    alert("please enter a number");
    return;
    }

    AddToCalculationEntry("Triangle",Area);
}


//Rectangle
function CalculatRectangleArea(){
    const RectangleField = document.getElementById("Rectanglewidth");
    const RectangleFieldString = RectangleField.value;
    const newRectanglewidthvalue = parseFloat(RectangleFieldString);
 
    const RectanglelengthField = document.getElementById("RectangleLength");
    const  RectanglelengthFieldString =RectanglelengthField.value;
    const newRectanglelengthValue= parseFloat(RectanglelengthFieldString);
 //    console.log(newTriangleBaseFieldvalue)
 //    console.log(newTriangleHeightFieldvalue)
 
//input validation
if(isNaN(newRectanglelengthValue) || isNaN(newRectanglewidthvalue)){
alert("please enter a number");
return;
}

 const Area = newRectanglelengthValue*newRectanglewidthvalue;
 
  const RectangleAreaValue =document.getElementById("RectangleAreaValue");
  RectangleAreaValue.innerText = Area;


  AddToCalculationEntry("Rectangle",Area);
 }
 
//Ellipse area
 function CalculatEllipseArea(){
 const EllipseFirstRadus = getInputFieldValue("EllipseFirstRadus");
 const EllipseSecondRadius = getInputFieldValue('EllipseSecondRadius');
 const EllipseAreaValue = 3.14*EllipseFirstRadus*EllipseSecondRadius;

  SetElementInnerText("EllipseAreaValue",EllipseAreaValue);

  if(isNaN(EllipseFirstRadus) || isNaN(EllipseSecondRadius)){
    alert("please enter a number");
    return;
    }
    AddToCalculationEntry("Ellipse",area);
 }
//Pentagon
function CalculatPentagonArea(){
    const PentagonFirst = getInputFieldValue("PentagonFirst");
    const PentagonSecond = getInputFieldValue("PentagonSecond");
    const PentagonAreaValue = 0.5 * PentagonFirst*PentagonSecond;
    SetElementInnerText("PentagonAreaValue",PentagonAreaValue);

    //input validation
  if(isNaN(PentagonFirst) || isNaN(PentagonSecond)){
    alert("please enter a number");
    return;
    }

// add to calculadtion entry
 AddToCalculationEntry("Pentagon",PentagonAreaValue);
}



//rombus
function CalculatRhombusArea(){
    const  RhombusFirst= getInputFieldValue("RhombusFirst");
    const RhombusSecond = getInputFieldValue("RhombusSecond");
    const RhombusAreaValue = RhombusFirst*RhombusSecond;
    SetElementInnerText("RhombusAreaValue",RhombusAreaValue);

    //input validation
  if(isNaN(RhombusFirst) || isNaN(RhombusSecond)){
    alert("please enter a number");
    return;
    }

// add to calculadtion entry
 AddToCalculationEntry("Rombus",RhombusAreaValue);
}


 ///reuse function for parallelogram

 function CalculatParallelogramArea(){
  const ParallelogramBase = getInputFieldValue("ParallelogramBase");
  const ParallelogramHeight = getInputFieldValue("ParallelogramHeight");
  const parallelogramAreaValue = ParallelogramBase * ParallelogramHeight;

  SetElementInnerText("parallelogramAreaValue",parallelogramAreaValue);

  //input validation
  if(isNaN(ParallelogramBase) || isNaN(ParallelogramHeight)){
    alert("please enter a number");
    return;
    }

// add to calculadtion entry
 AddToCalculationEntry("Parallelogram",parallelogramAreaValue);
 }




 ///reuse function input value
function getInputFieldValue(InputId){
    const InputFieldValue = document.getElementById(InputId);
    const InputFieldValueString = InputFieldValue.value;
    const newInputFieldValue = parseFloat(InputFieldValueString)
    return newInputFieldValue;
}

//reusable set text value
function SetElementInnerText(elementId,area){
    const elementIdText = document.getElementById(elementId,area);
    elementIdText.innerText = area;
}




//calculation entry

// 1.get the element where you want dynamic element
// 2. create an element you want to add
// 3.if needed add some class
// 4.set inner html
//5. append the created element as a child of the parent
function AddToCalculationEntry(areaType,area){
 //console.log(areaType+ ' ' +area);

 const calculationEntry = document.getElementById("calculation-entry");
 const p = document.createElement('p');

 p.classList.add('my-4');
 const count = calculationEntry.childElementCount;
 p.innerHTML =`${count +1}. ${areaType} ${area} cm<sup>2</sup> <button class= "btn btn-sm btn-success">Convert</button>`;
 calculationEntry.appendChild(p);
}

