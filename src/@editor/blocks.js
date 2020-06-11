export default function (editor, opt) {
  const c = opt;
  const bm = editor.BlockManager;

  bm.add("QuarkCardByHuz", {
    label: "QuarkCardByHuz",
    category: "Huz Component",
    content: { type: "QuarkCardByHuz" },
    attributes: { class: "gjs-fonts gjs-f-b1" },
  });
}