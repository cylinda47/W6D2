class HanoiView {

  constructor(game, $el){
    this.game = game;
    this.$el = $el;
    this.moves = [];
    this.setupTowers();

    $('.hanoi ul').on("click", () => {
      this.clickHandler(event, this);
    });
  }

  setupTowers() {
    const $firstTower = $('.hanoi').children().eq(0);
    for(let i =0; i < 3; i++){
      const $li = $('<li></li>');
      $li.addClass("disc-0" + i);
      $firstTower.append($li);
    }
  }

  render() {
    const towers = this.game.towers;
    const $piles = $(".hanoi ul");
    $piles.removeClass("red");
    $piles.children().remove();
    towers.forEach((tower, idx) => {
      for (let i = tower.length - 1; i >= 0; i--) {
        const disc = tower[i];
        const $li = $('<li></li>');
        $li.addClass("disc-0" + (disc - 1));
        $piles.eq(idx).append($li);
      }
    });
  }

  clickHandler(event, view) {
    console.log("CLICKED");
    const $pile = $(event.currentTarget);
    const pileIdx = $pile.index();
    view.moves.push(pileIdx);
    if (view.moves.length === 2) {
      view.game.move(...view.moves);
      view.render();
      view.moves = [];
      if (view.game.isWon()) {
        alert('YOU WON!!!');
      }
    } else {
      $pile.addClass("red");
    }

  }

}

module.exports = HanoiView;
