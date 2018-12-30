import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TreeView.css';

class TreeView extends Component {
    componentDidMount() {
        document.querySelector('.kar-tree-view li.folder input').checked = true;
    }

    componentDidUpdate() {
        let elms = document.querySelectorAll('.kar-tree-view > li.folder > input');
        let elmsLength = elms.length;
        for (let i = 0; i < elmsLength; i++) {
            elms[i].checked = true;
        }
    }

    getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    drawTree = nodes => (
        nodes.map(node => {
            const num = 'folder' + this.getRandomInt(100, 9999);
            if (node.children) {
                return (
                    <li className="folder" key={num}>
                        <label htmlFor={num} >{node.name}</label>
                        <input type="checkbox" id={num} />
                        <ol>{this.drawTree(node.children)}</ol>
                    </li>
                )
            } else {
                let fileType = node.type === 'json' ? 'kar-json-file'
                    : node.type === 'tree' ? 'kar-tree-file'
                        : 'file';
                return (
                    <li className={fileType} key={node.id}>
                        <span>{node.name}</span>
                    </li>
                );
            }
        })
    );

    render() {
        const { treeData } = this.props;
        return (
            <article className="kar-tree-view">
                {this.drawTree(treeData)}
            </article>
        );
    }

    static propTypes = {
        treeData: PropTypes.array.isRequired
    };
}

export default TreeView;