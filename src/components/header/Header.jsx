import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
  BsFillPieChartFill,
} from "react-icons/bs";

function Header() {
  return (
    <header className="header">
             <div className="sidebar-title">
        <div className="sidebar-brand" style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <BsFillPieChartFill className="icon_header" style={{fontSize:40}}/> 
          <text style={{fontSize:30,marginLeft:20,}}>DATA VISUALIZATION ASSIGNMENT</text>
        </div>
      </div>
      <div className="header-right">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
}

export default Header;
