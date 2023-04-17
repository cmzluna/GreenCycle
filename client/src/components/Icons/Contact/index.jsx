import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Contact = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}>
    <Path
      fill="#000"
      d="m32.56 26.423-7.453-6.776a1.836 1.836 0 0 0-2.55.08l-4.387 4.511c-1.056-.202-3.18-.863-5.365-3.043-2.185-2.187-2.847-4.316-3.043-5.365l4.508-4.389a1.833 1.833 0 0 0 .079-2.55l-6.774-7.45a1.833 1.833 0 0 0-2.55-.16L1.046 4.693a1.833 1.833 0 0 0-.531 1.19C.487 6.34-.037 17.198 8.382 25.62c7.344 7.343 16.544 7.88 19.077 7.88.37 0 .598-.01.658-.015a1.818 1.818 0 0 0 1.188-.533l3.41-3.98a1.828 1.828 0 0 0-.156-2.549Z"
    />
  </Svg>
);

export default Contact;