const Wave = (props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
        >
            <path
                fillOpacity="1"
                d="M0,160L34.3,160C68.6,160,137,160,206,160C274.3,160,343,160,411,144C480,128,549,96,617,106.7C685.7,117,754,171,823,165.3C891.4,160,960,96,1029,112C1097.1,128,1166,224,1234,256C1302.9,288,1371,256,1406,240L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            ></path>
        </svg>
    );
};

export default Wave;