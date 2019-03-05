import React from 'react';

import Fullscreen from 'common/lib/components/flex/Fullscreen';
import Title from 'app/components/Title';
import SubTitle from 'app/components/SubTitle';
import Centered from 'common/lib/components/flex/Centered';

function Skeleton({ titles }) {
  return (
    <Fullscreen style={{ height: '100vh' }}>
      <Centered horizontal vertical>
        <Title delay={titles[0].delay}>{titles[0].content}</Title>
        {titles.slice(1).map((title, index) => (
          <SubTitle key={String(index)} delay={title.delay}>
            {title.content}
          </SubTitle>
        ))}
      </Centered>
    </Fullscreen>
  );
}

export default Skeleton;
