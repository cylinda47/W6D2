class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    this.$el.on("click", "li", event => {
      const $square = $(event.target);
      const index = $square.index();
      const col = index % 3;
      let row;
      if (index < 3) {
        row = 0;
      } else if (index < 6) {
        row = 1;
      } else {
        row = 2;
      }

      let success = true;
      try {
        this.game.playMove([row, col]);
      }
      catch(err) {
        success = false;
        alert("INVALID MOVE!");
      }
      if (success) {
        this.makeMove($square);
      }

      if (this.game.isOver()) {
        const $h2 = $("<h2></h2>");
        $h2.text(this.game.currentPlayer + " WINS!");
        $("h1").append($h2);
      }
    });
  }

  makeMove($square) {
    $square.css("background-color", "white");
    $square.text(this.game.currentPlayer);
  }

  setupBoard() {
    this.$el.append('<ul class="grid"></ul>');
    const $grid = $('.grid');
    for(let i=0;i<9;i++){
      const $li = $('<li></li>');
      $grid.append($li);
    }
  }

}

module.exports = View;
