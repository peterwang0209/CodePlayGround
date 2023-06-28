import WidgetSquare from "./WidgetSquare";

const WidgetBoard = () => {
  return (
    <div className="w-1/2 mx-auto rounded-lg m-2 flex flex-wrap justify-between">
     <WidgetSquare></WidgetSquare>
     <WidgetSquare></WidgetSquare>
     <WidgetSquare></WidgetSquare>
     <WidgetSquare></WidgetSquare>
     <WidgetSquare></WidgetSquare>
     <WidgetSquare></WidgetSquare>
    </div>
  )
}

export default WidgetBoard;
