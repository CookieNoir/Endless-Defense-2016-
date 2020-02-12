using UnityEngine;
using UnityEngine.EventSystems;

namespace CnControls
{

    public class SimpleButton : MonoBehaviour
#if !UNITY_EDITOR
        , IPointerUpHandler, IPointerDownHandler
#endif
    {
        public string ButtonName = "Attack";
        private VirtualButton _virtualButton;

#if UNITY_EDITOR
        private void Awake()
        {
            gameObject.AddComponent<ButtonInputHelper>();
        }
#endif
        
        private void OnEnable()
        {
            _virtualButton = _virtualButton ?? new VirtualButton(ButtonName);
            CnInputManager.RegisterVirtualButton(_virtualButton);
        }
        private void OnDisable()
        {
            CnInputManager.UnregisterVirtualButton(_virtualButton);
        }

        public void OnPointerUp(PointerEventData eventData)
        {
            _virtualButton.Release();
        }
        public void OnPointerDown(PointerEventData eventData)
        {
            _virtualButton.Press();
        }
    }
}