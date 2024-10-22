import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Accordion = ({ onTopicClick, selectedTopic }) => {
    const topics = [
        {
            title: "INTRODUCTION",
            subTopics: [
                "Python Overview",
                "Installation",
                "What is Syntax?",
                "Python Comments",
                "Python Variables"
            ]
        },
        {
            title: "Python Data Types & Operators",
            subTopics: [
                "Data Types",
                "Python Numbers",
                "Data Conversion",
                "Type Casting",
                "Python Operators",
                "Python Booleans",
            ]
        },
        {
            title: "Python Strings",
            subTopics: [
                "Python Strings",
                "Operation on Strings",
                "String Methods",
                "Format Strings",
                "Escape Characters",
            ]
        },
        {
            title: "Python Lists",
            subTopics: [
                "Python Lists",
                "List Indexes",
                "Add List Items",
                "Remove List Items",
                "Change List Items",
                "List Comprehension",
                "List Methods"
            ]
        },
        {
            title: "Python Tuples",
            subTopics: [
                "Python Tuples",
                "Tuple Indexes",
                "Manipulating Tuples",
                "Unpack Tuples"
            ]
        },
        {
            title: "Python Sets",
            subTopics: [
                "Python Sets",
                "Add or Remove Set Items",
                "Join Sets",
                "Set Methods"
            ]
        },
        {
            title: "Python Dictionaries",
            subTopics: [
                "Python Dictionaries",
                "Access Items",
                "Add or Remove Dictionaries Items",
                "Copy Dictionaries"
            ]
        },
        {
            title: "Conditional Statements",
            subTopics: [
                "if Statement",
                "if-else Statement",
                "elif Statement",
                "Nested if Statement"
            ]
        },
        {
            title: "Python Loops",
            subTopics: [
                "Python for Loop",
                "Python while Loop",
                "Nested Loops",
                "Control Statements"
            ]
        },
        {
            title: "Python Functions",
            subTopics: [
                "Python Functions",
                "Function Arguments",
                "Python Variable Scope",
                "return Statement",
                "Python Recursion",
                "Python Main function"
            ]
        },
        {
            title: "Python Exception Handling",
            subTopics: [
                "Python Exceptions",
                "Python Exception Handling",
                "Python Custom Exceptions",
            ]
        },
        {
            title: "Python Modules",
            subTopics: [
                "Python Modules",
                "Python Packages"
            ]
        },
        {
            title: "Python OOPS",
            subTopics: [
                "python-oops",
                "self method",
                "init method"
            ]
        },
        {
            title: "Advanced Topics",
            subTopics: [
                "Python Lambda or Anonymous Function",
                "Python Iterators",
                "Python Generators",
                "Python Namespace and Scope",
                "Python Closures",
                "Python Decorators",
                "Python RegEx",
                "Python JSON",
                "Python try and except",
                "Python PIP",
                "Date & Time",
                "Python args and kwargs"
            ]
        }
    ];

    return (
        <div className="accordion" id="accordionExample">
            {topics.map((topic, index) => (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                        <button 
                            className="accordion-button" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={`#collapse${index}`} 
                            aria-expanded="true" 
                            aria-controls={`collapse${index}`}>
                            {topic.title}
                        </button>
                    </h2>
                    <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {topic.subTopics.map((subTopic, subIndex) => {
                                const isActive = selectedTopic === subTopic.toLowerCase().replace(/\s+/g, '-');
                                return (
                                    <Link 
                                        to={`/courses/${subTopic.replace(/\s+/g, '-').toLowerCase()}`} 
                                        key={subIndex} 
                                        className={`d-block text-decoration-none ${isActive ? 'active' : ''}`}
                                        onClick={() => onTopicClick(subTopic)}>
                                        {subTopic}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
