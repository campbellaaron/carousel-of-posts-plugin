const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
const { TextControl, TextareaControl } = wp.components;

 
registerBlockType('aarcampb/carousel-block', {
	title: 'Carousel of Posts',
	category: 'design',
	icon: 'slides',
	description: 'A description is used here, I think',
	keywords: ['carousel', 'campbell'],
    attributes: {
        descriptionText: {
            type: 'string',
            default: 'Nothing'
        },
        postIds: {
            type: 'array',
            default: []
        },
        someTitle: {
            type: 'string',
            default: 'Title'
        }
    },
	edit: function(props) { 
        function updateFirstInput(event) {
            props.setAttributes({descriptionText: event.target.value}); 
        }
        function updateTitle(event) {
            props.setAttributes({someTitle: event.target.value})
        }
        return React.createElement("div", {
            class: "row"
          }, /*#__PURE__*/React.createElement("div", {
            class: "column"
          }, /*#__PURE__*/React.createElement("img", {
            src: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80",
            alt: "Snow",
            style: "width:100%"
          })), /*#__PURE__*/React.createElement("div", {
            class: "column"
          }, /*#__PURE__*/React.createElement("img", {
            src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            alt: "Forest",
            style: "width:100%"
          })), /*#__PURE__*/React.createElement("div", {
            class: "column"
          }, /*#__PURE__*/React.createElement("img", {
            src: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            alt: "Mountains",
            style: "width:100%"
          })));
	},
	save: function(props) { 
        return React.createElement("div", {
            class: "row"
          }, /*#__PURE__*/React.createElement("div", {
            class: "column"
          }, /*#__PURE__*/React.createElement("img", {
            src: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80",
            alt: "Snow",
            style: "width:100%"
          })), /*#__PURE__*/React.createElement("div", {
            class: "column"
          }, /*#__PURE__*/React.createElement("img", {
            src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            alt: "Forest",
            style: "width:100%"
          })), /*#__PURE__*/React.createElement("div", {
            class: "column"
          }, /*#__PURE__*/React.createElement("img", {
            src: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            alt: "Mountains",
            style: "width:100%"
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Here is a ", props.attributes.descriptionText, " and a new ", props.attributes.someTitle, " ")));
    }
});