const WaveDivider = () => {
    return (
      <div className="w-full overflow-hidden leading-none" style={{ height: '52px' }}>
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20"
        >
          <path
            d="M0,40 
               C75,90 150,-10 225,40 
               C300,90 375,-10 450,40 
               C525,90 600,-10 675,40 
               C750,90 825,-10 900,40 
               C975,90 1050,-10 1125,40 
               C1200,90 1275,-10 1350,40 
               L1200,0 
               L0,0 
               Z"
            fill="#ff8800"
          />
        </svg>
      </div>
    )
  }
  
  export default WaveDivider
  
  
  