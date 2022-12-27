import React, { ReactElement } from "react";
import { Props } from "./types";

const URL = "https://www.google.com/maps/embed/v1/place";
const KEY = "AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw";
const style = {
    width: '100%',
    height: '350px'

}

export const Map = (props: Props): ReactElement => {
    const { address, zoom } = props;

    const iframeSrc = `${URL}?key=${KEY}&q=${address}&zoom=${zoom}`;

    return (
        <div >
            <iframe style={style} src={iframeSrc} />
        </div>
    );
};
