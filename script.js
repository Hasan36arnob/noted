// Notetaking App - Main JavaScript

class NotetakingApp {
    constructor() {
        this.notes = this.loadNotes();
        this.currentNoteId = null;
        this.selectedColor = 'gradient';
        this.colors = {
            gradient: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
            blue: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)',
            green: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            purple: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            orange: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            red: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
        };
        
        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.renderNotes();
        this.updateEmptyState();
    }
//jd
    cacheElements() {
        this.elements = {
            noteList: document.getElementById('noteList'),
            noteListContainer: document.getElementById('noteListContainer'),
            noteEditorContainer: document.getElementById('noteEditorContainer'),
            noteTitle: document
            .getElementById('noteTitle'),
            noteContent: document.getElementById('noteContent'),
            noteTimestamp: document.getElementById('noteTimestamp'),
            addNoteBtn: document.getElementById('addNoteBtn'),
            fab: document.getElementById('fab'),
            backBtn: document.getElementById('backBtn'),
            saveBtn: document.getElementById('saveBtn'),
            deleteBtn: document.getElementById('deleteBtn'),
            archiveBtn: document.getElementById('archiveBtn'),
            emptyState: document.getElementById('emptyState'),
            menuBtn: document.getElementById('menuBtn')
        };
    }

    bindEvents() {
        // Add note buttons
        this.elements.addNoteBtn.addEventListener('click', () => this.addNewNote());
        this.elements.fab.addEventListener('click', () => this.addNewNote());
        
        // Navigation
        this.elements.backBtn.addEventListener('click', () => this.closeEditor());
        this.elements.saveBtn.addEventListener('click', () => this.saveNote());
        
        // Actions
        this.elements.deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.deleteNote();
        });
        this.elements.archiveBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleArchive();
        });
        
        // Auto-save on input
        this.elements.noteTitle.addEventListener('input', () => this.updateCurrentNote());
        this.elements.noteContent.addEventListener('input', () => this.updateCurrentNote());
        
        // Menu button
        this.elements.menuBtn.addEventListener('click', () => this.showMenu());
        
        // Close editor on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.elements.noteEditorContainer.style.display !== 'none') {
                this.closeEditor();
            }
        });
    }

    loadNotes() {
        const savedNotes = localStorage.getItem('notes');
        return savedNotes ? JSON.parse(savedNotes) : [];
    }

    saveNotes() {
        localStorage.setItem('notes', JSON.stringify(this.notes));
    }

    renderNotes() {
        this.elements.noteList.innerHTML = '';
        
        if (this.notes.length === 0) {
            this.updateEmptyState();
            return;
        }

        this.notes.forEach(note => {
            const noteCard = this.createNoteCard(note);
            this.elements.noteList.appendChild(noteCard);
        });
    }

    createNoteCard(note) {
        const card = document.createElement('div');
        card.className = `note-card ${note.archived ? 'archived' : ''}`;
        card.dataset.id = note.id;
        
        // Get color gradient
        const colorStyle = this.colors[note.color] || this.colors.gradient;
        
        // Create preview text
        const previewText = note.content.slice(0, 100) + (note.content.length > 100 ? '...' : '');
        
        card.innerHTML = `
            <div class="note-color-indicator" style="background: ${colorStyle}"></div>
            <div class="note-card-content">
                <div class="note-title">${this.escapeHtml(note.title) || 'Untitled Note'}</div>
                <div class="note-preview">${this.escapeHtml(previewText)}</div>
                <div class="note-meta">
                    <span class="note-date">
                        <i class="fas fa-clock"></i>
                        ${this.formatDate(note.updatedAt)}
                    </span>
                    ${note.archived ? '<i class="fas fa-archive" style="color: var(--text-secondary)"></i>' : ''}
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => this.openNote(note.id));
        return card;
    }

    addNewNote() {
        const newNote = {
            id: Date.now().toString(),
            title: '',
            content: '',
            color: 'gradient',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            archived: false
        };
        
        this.notes.unshift(newNote);
        this.saveNotes();
        this.openNote(newNote.id);
    }

    openNote(id) {
        const note = this.notes.find(n => n.id === id);
        if (!note) return;
        
        this.currentNoteId = id;
        this.selectedColor = note.color;
        
        this.elements.noteTitle.value = note.title;
        this.elements.noteContent.value = note.content;
        this.elements.noteTimestamp.textContent = `Last edited: ${this.formatDate(note.updatedAt)}`;
        
        this.elements.noteListContainer.style.display = 'none';
        this.elements.noteEditorContainer.style.display = 'flex';
        
        // Focus on title or content
        if (note.title) {
            this.elements.noteContent.focus();
        } else {
            this.elements.noteTitle.focus();
        }
    }

    closeEditor() {
        this.elements.noteListContainer.style.display = 'block';
        this.elements.noteEditorContainer.style.display = 'none';
        this.currentNoteId = null;
        this.renderNotes();
        this.updateEmptyState();
    }

    saveNote() {
        if (!this.currentNoteId) return;
        
        const noteIndex = this.notes.findIndex(n => n.id === this.currentNoteId);
        if (noteIndex === -1) return;
        
        this.notes[noteIndex] = {
            ...this.notes[noteIndex],
            title: this.elements.noteTitle.value.trim(),
            content: this.elements.noteContent.value.trim(),
            updatedAt: new Date().toISOString(),
            color: this.selectedColor
        };
        
        this.saveNotes();
        this.renderNotes();
        this.updateEmptyState();
        this.closeEditor();
    }

    updateCurrentNote() {
        if (!this.currentNoteId) return;
        
        const noteIndex = this.notes.findIndex(n => n.id === this.currentNoteId);
        if (noteIndex === -1) return;
        
        this.notes[noteIndex] = {
            ...this.notes[noteIndex],
            title: this.elements.noteTitle.value.trim(),
            content: this.elements.noteContent.value.trim(),
            updatedAt: new Date().toISOString()
        };
        
        this.saveNotes();
    }

    deleteNote() {
        if (!this.currentNoteId) return;
        
        if (confirm('Are you sure you want to delete this note?')) {
            this.notes = this.notes.filter(n => n.id !== this.currentNoteId);
            this.saveNotes();
            this.renderNotes();
            this.updateEmptyState();
            this.closeEditor();
        }
    }

    toggleArchive() {
        if (!this.currentNoteId) return;
        
        const noteIndex = this.notes.findIndex(n => n.id === this.currentNoteId);
        if (noteIndex === -1) return;
        
        this.notes[noteIndex].archived = !this.notes[noteIndex].archived;
        this.saveNotes();
        this.renderNotes();
        this.updateEmptyState();
    }

    updateEmptyState() {
        const visibleNotes = this.notes.filter(n => !n.archived);
        this.elements.emptyState.style.display = visibleNotes.length === 0 ? 'flex' : 'none';
    }

    showMenu() {
        const menuItems = [
            { icon: 'fa-list', label: 'All Notes', action: () => this.renderNotes() },
            { icon: 'fa-archive', label: 'Archived', action: () => this.showArchived() },
            { icon: 'fa-trash', label: 'Trash', action: () => console.log('Trash feature coming soon') },
            { icon: 'fa-search', label: 'Search', action: () => console.log('Search feature coming soon') }
        ];
        
        let menuHTML = '<div class="menu-overlay"></div><div class="menu-dropdown">';
        menuItems.forEach(item => {
            menuHTML += `
                <button class="menu-item" onclick="${item.action.name}()">
                    <i class="fas ${item.icon}"></i>
                    <span>${item.label}</span>
                </button>
            `;
        });
        menuHTML += '</div>';
        
        document.body.insertAdjacentHTML('beforeend', menuHTML);
        
        // Close menu when clicking outside
        document.querySelector('.menu-overlay').addEventListener('click', () => {
            document.querySelector('.menu-overlay').remove();
            document.querySelector('.menu-dropdown').remove();
        });
    }

    showArchived() {
        const archivedNotes = this.notes.filter(n => n.archived);
        this.elements.noteList.innerHTML = '';
        
        if (archivedNotes.length === 0) {
            this.elements.noteList.innerHTML = '<div class="empty-state"><p>No archived notes</p></div>';
            return;
        }
        
        archivedNotes.forEach(note => {
            const noteCard = this.createNoteCard(note);
            this.elements.noteList.appendChild(noteCard);
        });
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now - date;
        
        if (diff < 60000) return 'Just now';
        if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
        if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
        if (diff < 604800000) return `${Math.floor(diff / 86400000)}d ago`;
        
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    escapeHtml(text) {
        if (!text) return '';
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NotetakingApp();
});
