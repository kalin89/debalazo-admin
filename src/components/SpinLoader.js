import React from 'react';

const style = {
    width: "450px",
    height: "450px",
    zIndex: "9999",
}
const spinContainer = {
    width: "100%",
    height: "97vh",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(1px)",
    zIndex: "9999",
}

const spinLoader = {
    position: "absolute",
    top: "calc(50% - 225px)",
    left: "calc(50% - 225px)",
    textAlign: "center",
    color: "#E97232",
}

const pStyle = {
  margin: "-180px 0 0 0",
  fontWeight: "700"
}

function SpinLoader({ children, show, message }) {
    
  return(
    <>
      {show ? (
        <div style={spinContainer}>
            <div style={spinLoader}>
                <lottie-player 
                    //src="https://assets4.lottiefiles.com/packages/lf20_ro8p6e3m.json" 
                    src="https://assets10.lottiefiles.com/private_files/lf30_l4b43a03.json"
                    background="transparent" 
                    speed="1" 
                    style={style}
                    loop
                    autoplay>
                </lottie-player>
                <p style={pStyle}>{message}</p>
            </div>  
        </div>
      ) : null}
      {children}
    </>
  )
}

export default SpinLoader;