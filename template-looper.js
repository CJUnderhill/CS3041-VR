/**
 * Swap template with mask animation.
 */
AFRAME.registerComponent('template-looper', {
    schema: { type: 'array' },

    init: function () {
        this.maskEl = this.el.sceneEl.querySelector('#mask');
        this.index = 0;
    },

    onClick: function () {

        document.getElementById("linkToExplorer").addEventListener("click", changeScene);

    },
    changeScene: function () {
        // Set template.
        this.maskEl.emit('fade');
        self.el.setAttribute('template', 'src', self.data[index]);
        document.getElementById("linkToExplorer").setAttribute("visible", "false");
    }
});