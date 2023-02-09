import React, {FC} from 'react';
import s from '../ware.module.scss'

type Props = {
    imageSource: string
}

const SmallPicture: FC<Props> = ({imageSource}) => {
    const changeBig = (event: React.MouseEvent) => {
        let bigImage = document.querySelector('.' + s.big_picture)!
        let target: Element = event.currentTarget!
        if(!target.classList.contains(s.small_picture))
            target = target.firstChild! as Element
        let bigImageStyle = bigImage.getAttribute('style')!
        let targetImageStyle = target.getAttribute('style')!
        bigImage.setAttribute('style', targetImageStyle)
        target.setAttribute('style', bigImageStyle)
    }
    
    return (
        <img alt="" className={s.small_picture} style={{content: `url("${imageSource}")`}} onClick={changeBig}/>
    );
};

export default SmallPicture;