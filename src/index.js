const ImageusPlugin = {
  install(Vue) {
    Vue.directive("imageus", {
      async inserted(el, binding) {
        {
          if (el.tagName !== "IMG") {
            console.warn("[image-loader] This directive can only be used on img elements.");
            return;
          }
          const src = el.getAttribute("src");
          const width = el.getAttribute("width");
          const height = el.getAttribute("height");
          const mode = el.getAttribute("imageus-mode");
          const extract = el.getAttribute("imageus-extract");
          const flip = el.getAttribute("imageus-flip");
          const flop = el.getAttribute("imageus-flop");
          const rotate = el.getAttribute("imageus-rotate");
          const extractFaces = el.getAttribute("imageus-extract-faces");
          const grayscale = el.getAttribute("imageus-grayscale");
          const blur = el.getAttribute("imageus-blur");
          const negate = el.getAttribute("imageus-negate");
          const brightness = el.getAttribute("imageus-brightness");
          const gamma = el.getAttribute("imageus-gamma");
          const hue = el.getAttribute("imageus-hue");
          const overlay = el.getAttribute("imageus-overlay");
          const gravity = el.getAttribute("imageus-gravity");

          const params = new URLSearchParams();
          if (width) params.append("width", width);
          if (height) params.append("height", height);
          if (mode) params.append("mode", mode);
          if (extract) params.append("extract", extract);
          if (flip) params.append("flip", flip);
          if (flop) params.append("flop", flop);
          if (rotate) params.append("rotate", rotate);
          if (extractFaces) params.append("extractFaces", extractFaces);
          if (grayscale) params.append("grayscale", grayscale);
          if (blur) params.append("blur", blur);
          if (negate) params.append("negate", negate);
          if (brightness) params.append("brightness", brightness);
          if (gamma) params.append("gamma", gamma);
          if (hue) params.append("hue", hue);
          if (overlay) params.append("overlay", overlay);
          if (gravity) params.append("gravity", gravity);

          const url = `https://img.imageus.dev/${src}?${params.toString()}`;
          el.setAttribute("src", url);
        }
      }
    });
  }
};

export default ImageusPlugin;
