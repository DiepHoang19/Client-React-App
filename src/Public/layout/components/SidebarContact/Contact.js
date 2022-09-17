import React from "react";
import "./Contact.scss"

function Contact() {
  const ListContact = [
    {
      id: 1,
      name: "Name",
    },
  ];

  return (
    <>
    <div id="contact-page">
    <div className="side-bar-right">
        <div className="hidden_scroll">
          <div className="sbr__contact--header">
            <h5 className="sbr__contact--title">Người liên hệ</h5>
            <div className="sbr__contact--header--action">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          {ListContact.map((item) => (
            <div className="sbr__contact--list">
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
              <div className="sbr__contact--list-item">
                <div className="sbr__contact--list-item-avt">
                  <img src="./assets/img/user.png" alt="" />
                </div>
                <div className="sbr__contact--list-item-name">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Contact;
