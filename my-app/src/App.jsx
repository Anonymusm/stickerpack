import "./App.css";
import { Component } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import stikers from "./sticker.json";
import { StickerList } from "./components/Sticker/StickerList";

const SelectedLabel = ({text}) => {
  return <h1>{text}</h1>;
};

export class App extends Component {
  state = {
  selectedStickerLabel: null, // Пусто
  };

  selectStickerLabel = (label) => {
    this.setState({selectedStickerLabel: label})
  }

  render() {
    return (
      <>
        <SelectedLabel 
        text={this.state.selectedStickerLabel}
        />
        <StickerList 
        stickers={stikers} 
        onSelect={this.selectStickerLabel}
        />
        <GlobalStyle />
      </>
    );
  }
}
