import { Base } from '.';
import mock from './mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

export default {
  title: 'Base',
  component: Base,
  args: {
    children: (
      <>
        <GridText {...gridMock} />
        <GridText {...gridMock} background />
        <GridText {...gridMock} />
      </>
    ),
    ...mock,
  }
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
