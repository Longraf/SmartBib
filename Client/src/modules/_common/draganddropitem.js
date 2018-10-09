module.exports = class DragAndDropItem {

    /**
     *
     * @param {DragAndDropItem} co
     */
    constructor ({
                     Target = null,
                 })
    {
        this._Target = Target;
        let dragSrcEl = null;
        let that      = this;
        this._handleDragStart = (e) => {
            e.target.style.opacity = '1'; // this / e.target is the source node.
            dragSrcEl = e.target;
        };
        that._handleDragOver = (e) => {
            if (e.preventDefault) {
                e.preventDefault(); // Necessary. Allows us to drop.
            }
            e.dataTransfer.dropEffect = 'move';
            return false;
        };
        that._handleDragEnter = (e) => {
            // this / e.target is the current hover target.
            e.target.classList.add('over');
        };
        that._handleDragLeave = (e) => {
            e.target.classList.remove('over'); // this / e.target is previous target element.
        };
        that._isAtribute = () => {

        };
        that._handleDrop = (e) => {
            if (e.stopPropagation) {
                e.stopPropagation(); // stops the browser from redirecting.
            }
            //console.log(dragSrcEl.parentNode);

            //if (e.target.parentNode.hasAttributes('draggable')) {
                //console.log(e.target.hasAttributes('draggable'));
                // console.log('123123');

                //if (dragSrcEl != e.target) {
                    // Set the source column HTML to the HTML of the column we dropped on.

                    var fillPlace   = e.target.parentNode.cloneNode(false);
                    //console.log(e.target.parentNode);
                    e.target.parentNode.parentNode.insertBefore(fillPlace, dragSrcEl);
                    e.target.parentNode.parentNode.insertBefore(dragSrcEl, e.target.parentNode);
                    e.target.parentNode.parentNode.insertBefore(e.target.parentNode, fillPlace);
                    fillPlace.remove();
                //}

            //}
            return false;
        };

        that._handleDragEnd = (e) => {
            // this/e.target is the source node.
            e.target.style.opacity = '1';
            Target.forEach(function (elem) {
                elem.classList.remove('over');
            });
        };

        Target.forEach(function(elem) {
            elem.addEventListener('dragstart', that._handleDragStart, false);
            elem.addEventListener('dragenter', that._handleDragEnter, false);
            elem.addEventListener('dragover', that._handleDragOver, false);
            elem.addEventListener('dragleave', that._handleDragLeave, false);
            elem.addEventListener('drop', that._handleDrop, false);
            elem.addEventListener('dragend', that._handleDragEnd, false);
        });
        window.dddd = this;
        //console.log(this);
    }
    get Target(){
        return this._Target;
    }
    set Target(v){
        this._Target = v;
    }

};
