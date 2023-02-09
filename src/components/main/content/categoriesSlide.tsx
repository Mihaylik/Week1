import React, {FC} from 'react';
import s from '../main.module.scss';

type Props = {
    imageSrc: string,
    caption: string
}

const CategoriesSlide: FC<Props> = ({imageSrc, caption}) =>  {
    return (
        <div className={s.categories_slide}>
            <img className={s.categories_slide_image} src={imageSrc}/>
            <div className={s.categories_slide_caption_container} >
                <div className={s.categories_slide_caption}>
                    {caption}
                </div>
            </div>
        </div>
    );
}

export default CategoriesSlide;