import { Component } from "react";

export class Sticker extends Component {
  // state = {
  //   isOpen: false,
  // }

  render() {
    const {
      onSelect,
      onToggle,
      isSelected,
      sticker: { img, label },
    } = this.props;
    return (
      <div
        onClick={() => {
          onSelect(label);
          onToggle(img);
        }}
      >
        <img src={img} alt={label} />
        {isSelected && <p>{label}</p>}
      </div>
    );
  }
}

// export const Sticker = ({ sticker }) => {
//   return (
//     <>
//         <img src={sticker.img} alt={sticker.label} />
//         <p>{sticker.label}</p>
//     </>
//   );
// };
