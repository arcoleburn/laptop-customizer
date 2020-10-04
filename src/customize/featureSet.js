import React from 'react'
import slugify from 'slugify'

import FeatureOption from './featureOption'

function FeatureSet(props){

    const feature= props.options.map(item=>{
            const itemHash=slugify(JSON.stringify(item))
            return(
                <FeatureOption
                key={itemHash}
                id={itemHash}
                feature={props.name}
                itemHash={itemHash}
                item={item}
                updateFeature={props.updateFeature}
                selected={props.selected}
              />
            )
        })
    
    const {name, featureHash} = props
    return(
        <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
            <h3>{name}</h3>
        </legend>
        {feature}
        </fieldset>
    )    
}

export default FeatureSet