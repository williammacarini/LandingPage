import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading'

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size="small" uppercase='true'>
      <Styled.Container href={link}>
        {!srcImg ?
          text : <img src={srcImg} alt={text} />
        }
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
