import React, {FC} from 'react';

type Props = {
    height: number
}

const VerticalDivider: FC<Props> = ({ height }) => {
    return (
        <div style={{height: height}}/>
    );
}

export default VerticalDivider