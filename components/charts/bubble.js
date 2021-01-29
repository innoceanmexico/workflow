import React from 'react';
import { ResponsiveBubble } from '@nivo/circle-packing'
import data from './root';

const MyResponsiveBubble = () => (
  <ResponsiveBubble
    root={data}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    identity="name"
    value="loc"
    colors={{ scheme: 'paired' }}
    labelSkipRadius={10}
    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
    animate={true}
    motionStiffness={90}
    motionDamping={12}
  />
)

export default MyResponsiveBubble;