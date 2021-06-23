let chessPiece;

switch (chessPiece.toLowerCase()) {
  case "pawn":
    console.log("forward");
    break;
  case "knight":
    console.log("L shape");
    break;
  case "bishop":
    console.log("diagonally");
    break;
  case "rook":
    console.log("horizontally or vertically");
    break;
  case "queen":
    console.log("any direction");
    break;
  case "king":
    console.log("any direction");
    break;
  default:
    console.log("Erro!")
}
