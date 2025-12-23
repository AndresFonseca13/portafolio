function WaveDivider({ flip = false, bgColor = "#f9fafb" }) {
    return (
        <div className={`w-full ${flip ? 'rotate-180' : ''}`} style={{ lineHeight: 0 }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
                className="w-full"
                style={{ display: 'block', height: '60px' }}
            >
                <path
                    fill={bgColor}
                    d="M0,50 Q360,100 720,50 T1440,50 L1440,100 L0,100 Z"
                />
            </svg>
        </div>
    )
}

export default WaveDivider;
