import { Component } from "react";
import { Box } from "../Box";
import { Sticker } from "./Sticker";

export class StickerList extends Component {
  state = {
    selectedSticker: null,
  };

  selectSticker = (img) => {
    this.setState({ selectedSticker: img });
  };

  render() {
    const { stickers, onSelect } = this.props;
    // const { selectedSticker } = this.state;

    return (
      <Box as="ul" display="flex" p={2} gridGap={4}>
        {stickers.map((sticker, index) => (
          <li key={index}>
            <Sticker
              sticker={sticker}
              onSelect={onSelect}
              onToggle={this.selectSticker}
              isSelected={this.state.selectedSticker === sticker.img}
            />
          </li>
        ))}
      </Box>
    );
  }
}


// export const StickerList = ({ stickers }) => {
//   console.log(stickers);
//   return (
//     <Box as="ul" display="flex" p={2} gridGap={4}>
//       {stickers.map((sticker, index) => (
//         <li key={index}>
//           <Sticker sticker={sticker} />
//         </li>
//       ))}
//     </Box>
//   );
// };
