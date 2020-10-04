import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
	width: 100%;
	height: 50px;
`;

const Loader = React.forwardRef((props, ref) => <LoaderWrapper ref={ref} />);

export default Loader;
